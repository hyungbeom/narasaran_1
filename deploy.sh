#!/usr/bin/env bash

#================================================================
# Script:   deploy-react.sh
# Purpose:  Pull latest 코드, Build React app and restart Nginx
# Usage:    ./deploy-react.sh
#================================================================

set -euo pipefail
IFS=$'\n\t'

# ——————————————————————————————
# 환경 설정 (자신의 환경에 맞게 수정)
# ——————————————————————————————
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"
GIT_BRANCH="main"                            # Pull 할 브랜치
NGINX_ROOT="/usr/share/nginx/html"           # Nginx 서비스 정적 파일 경로
LOG_FILE="/var/log/deploy-react.log"         # (선택) 로그 파일
NGINX_SERVICE="nginx"                        # Rocky Linux 에서의 서비스 이름

# (선택) 로그 디렉토리 생성
mkdir -p "$(dirname "$LOG_FILE")"

# ——————————————————————————————
# 로그 함수
# ——————————————————————————————
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# ——————————————————————————————
# 0. 최신 코드 가져오기
# ——————————————————————————————
log "0. React 프로젝트 디렉터리로 이동: $PROJECT_DIR"
cd "$PROJECT_DIR"

log "0.1. Git pull ($GIT_BRANCH 브랜치)"
git fetch origin "$GIT_BRANCH"
git checkout "$GIT_BRANCH"
git pull origin "$GIT_BRANCH"

# ——————————————————————————————
# 1. React 프로젝트 빌드
# ——————————————————————————————
log "1. 의존성 설치 (npm install)"
npm install

log "2. 빌드 실행 (npm run build)"
npm run build

# ——————————————————————————————
# 2. Nginx 정적 파일 업데이트
# ——————————————————————————————
log "3. 기존 Nginx 컨텐츠 삭제: $NGINX_ROOT/*"
sudo rm -rf "$NGINX_ROOT"/*

log "4. 새 빌드 결과 복사"
sudo cp -r build/* "$NGINX_ROOT"/

# SELinux 사용 중이라면, 컨텍스트 재설정 (Rocky Linux 기본 SELinux 사용)
if command -v restorecon &> /dev/null; then
  log "5. SELinux 컨텍스트 복원"
  sudo restorecon -Rv "$NGINX_ROOT"
fi

# ——————————————————————————————
# 3. Nginx 재시작
# ——————————————————————————————
log "6. Nginx 서비스 재시작 ($NGINX_SERVICE)"
sudo systemctl restart "$NGINX_SERVICE"

log "✅ 배포 완료: Git pull → React 빌드 → Nginx 재시작 성공"