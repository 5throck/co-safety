# 프로젝트 스크립트 (Project Scripts)

프로젝트 운영을 위한 유틸리티 스크립트입니다. ADR-0036에 따라 모든 스크립트는 TypeScript (Bun) 전용입니다.

## 사용 가능한 스크립트

### TypeScript (Bun) 스크립트

복잡한 오케스트레이션 및 자동화 스크립트:

| 스크립트 | 목적 |
|---------|------|
| `verify-skills.ts` | `skills/` 디렉토리의 모든 스킬이 로드 가능한지 확인 |
| `agent-create.ts` | 새 에이전트 정의 파일 생성 |
| `agent-list.ts` | 메타데이터와 함께 모든 에이전트 나열 |
| `agent-delete.ts` | 에이전트 파일 삭제 |
| `agent-verify.ts` | 에이전트/문서 동기화 확인 |
| `dispatch.ts` | 에이전트 디스패치를 위한 메인 진입점 |
| `dispatch-parallel.ts` | 병렬 에이전트 디스패처 |
| `dispatch-serial.ts` | 종속성이 있는 직렬 에이전트 디스패처 |
| `retry-handler.ts` | 지수 백오프가 포함된 재시도 로직 |

## NPM 스크립트

`package.json`에 정의된 편의 단축키:

```bash
bun run verify-skills     # 스킬 확인
bun run agent:create      # 새 에이전트 생성
bun run agent:list        # 에이전트 목록
bun run agent:delete      # 에이전트 삭제
bun run agent:verify      # 에이전트/문서 동기화 확인
bun run dispatch:parallel # 병렬 디스패치 실행
bun run dispatch:serial   # 직렬 디스패치 실행
```

## 파일 인코딩

모든 스크립트는 **UTF-8 (BOM 없음)**으로 저장해야 합니다.

---

*프로젝트 템플릿 - 필요에 따라 사용자 정의하세요*