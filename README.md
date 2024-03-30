# PortOne REST API V2

포트원 API V2의 request, response 타입을 모두 직접적으로 지원합니다.

- [PortOne 개발자센터 - REST API V2](https://developers.portone.io/api/rest-v2?v=v2)


## Usage
```ts
import { PortOne } from 'portone-api-v2';

const portone = new PortOne({
    // (Required) PortOne V2 API Secret
    apiSecret: process.env.PORTONE_API_SECRET,

    // (Optional) axios 인스턴스 커스터마이징
    validateStatus: (status: number) => true,  // 예시
    timeout: 5000,  // 예시
    baseURL: 'https://test.portone.io', // 기본값: 'https://api.portone.io'
});
```


last updated: 2024-03-30 (works with [`@portone/browser-sdk@0.0.5`](https://www.npmjs.com/package/@portone/browser-sdk?activeTab=readme))