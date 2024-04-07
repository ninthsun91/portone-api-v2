# PortOne REST API V2

- [PortOne 개발자센터 - REST API V2](https://developers.portone.io/api/rest-v2?v=v2)

포트원 API V2의 request, response 타입에 대한 자동완성을 모두 지원합니다.
![alt text](public/request-auto-complete.png)
![alt text](public/response-auto-complete.png)

단, 작성자 본인이 사용하는 API 이외에는 완성이 안되어 있으며, 이는 점진적으로 추가 예정입니다. 혹시 이 문구가 있는 버전을 사용하시는 분들은 아래 지원 API 목록에서 본인이 필요한 API를 확인해주세요.

## Usage

### API Client 초기화
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

### 정기결제 예시
```ts
const { data: { billingKeyInfo } } = await portone.billingkey.issue({
    channelKey: 'channel-key',
    method: {
        card: {
            credential: {
                number: '1234-1234-1234-1234',
                expiryMonth: '02',
                expiryYear: '28',
            }
        }
    },
});

const { billingKey } = billingKeyInfo;
await portone.payments.payWithBillingKey('payment-id', {
    billingKey,
    orderName: '주문명',
    amount: {
        total: 10000,
    },
    currency: 'KRW',
    noticeUrls: ['https://my-service.com/api/payments/callback'],
});
```

### 웹훅 스케줄링 예시
```ts
app.post('/payments/callback', async (req, res) => {
    const { payment_id }: PaymentWebhookCallbackBody = req.body;
    const { data: payment } = await portone.payments.find(payment_id);

    // 실결제 내역 대조

    const paymentId = 'next-payment-id';
    await portone.schedules.nextPayment(paymentId, {
        timeToPay: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
        payment: {
            orderName: payment.orderName,
            billingKey: payment.billingKey,
            amount: payment.amount,
            currency: payment.currency,
        },
    });
});
```


## 지원 API

### 완성 API
다음의 API들은 정상적으로 사용이 가능합니다.
- 인증 관련 API
- 결제 관련 API
- 결제 예약 관련 API
- 빌링키 관련 API

### 현재 미완성 API
다음의 API들은 해당 메소드 존재 여부와 상관없이 정상적인 API 요청이 안 이루어질 수 있습니다.
- 결제 관련 API 일부
  - 결제 대용량 다건 조회(커서기반)
- 현금 영수증 관련 API
- 본인인증 관련 API
- 특정 PG사 관련 API


last updated: 2024-04-07 (works with [`@portone/browser-sdk@0.0.5`](https://www.npmjs.com/package/@portone/browser-sdk?activeTab=readme))