---
title: "is-an.ai 개발기"
date: "2024-01-01"
thumbnail: "https://dohyun-images.s3.ap-northeast-2.amazonaws.com/profile-cropped.jpg"
description: "무료 도메인 서비스 is-an.ai를 개발하며 겪은 좌충우돌 사고를 모았습니다."
tags: ["React", "Vite"]
---

## is-an.ai?

[is-an.ai](https://is-an.ai)는 [subdomain].is-an.ai 형태의 서브도메인을 무료로 제공해주는 서비스입니다. 등록된 서브도메인은 3,000개 이상이며 해외 트래픽도 많이 유입되고 있어요.

저는 is-a.dev라는 서비스의 상당한 팬인데요, 이력서도 [dohyun.is-a.dev](https://dohyun.is-a.dev)에 올려두고 주변 사람들에게도 항상 홍보를 하고 다녔었죠.

도메인을 구경하며 is-a.dev처럼 서브도메인으로 문장을 만들 수 있는 항상 찾아다녔는데, 의외로 is-an.ai가 구매 가능한 상태이더라구요.

## 20만원짜리 도메인

.ai 회사들로 주가가 오른 앵귈라의 ccTLD .ai, 도메인 레지스트라들에서는 70달러선에서 구매가 가능하다고 홍보하지만... 이는 1년 구독 가격으로 구매는 2년 이상부터 가능합니다. 😶

손이 떨렸지만... 이건 뭔가 도메인만 사면 성공할 수 있는 사이드프로젝트 같으니까... 일단 구매했습니다.

레지스트라는 평소 신뢰하는 [Spaceship](https://spaceship.com)을 이용했습니다. 신뢰하는 이유는 그냥 이름이 맘에 들고 UI가 예뻐서입니다. [TLD-list](https://tld-list.com)에서 최저가 레지스트라를 봐도 Spaceship이 자주 보이더라구요.

## 이틀간의 바이브코딩

초기 서비스 구조는 is-a.dev를 정말 많이 따라했습니다. is-a.dev는 github repository를 도메인 레코드의 SSOT로 사용합니다.
도메인 등록용 랜딩페이지, 디스코드 등 편리한 방법들을 제공하지만 이들은 github에 레코드 파일 생성해서 pr 올리기의 단순한 wrapper로 작동해요.
그래서 원한다면 직접 PR을 올려서 도메인을 등록할 수도 있습니다.

우리도 이 방식을 똑같이 따라했죠. Github에 도메인 레코드를 저장하고, action으로 레코드를 등록합니다.
도메인 레코드는 어떻게 등록해야할까요? 네임서버를 만들어야하는 건가 겁을 먹었지만, 의외로 Cloudflare에 등록하면 간단했습니다.
Cloudflare는 무료플랜은 도메인당 200개, Pro 플랜은 3,500개의 도메인 레코드를 지원합니다.
Action과 Wrangler를 이용해 간단히 구현할 수 있었어요.

다만 Github에 들어와 자신의 서브도메인을 담은 레코드를 추가하고 PR을 올리는 작업은 대부분 유저들에게 상당한 허들입니다.
간단히 등록할 수 있는 웹 서비스가 반드시 필요하다고 생각했고, Cursor로 바이브코딩을 해 순식간에 완성했습니다.
사이드 프로젝트를 할 때 항상 디자인이 고통이였는데 공대에서는 볼 수 없던 수려한 디자인도 AI가 만들어주더라구요.

```text
바이브코딩 과정

*프로젝트 설명*
기본 레아아웃 만들어줘.
---
투박한데 미려한 디자인 넣고 시작하자
---
너무 AI 스타트업 같이 생겼다. 오픈소스 느낌 추가해.
--- (이랬더니 터미널 들어간 디자인 만들음)
우리 타겟 유저 일부는 터미널 모른다. 웹사이트 스타일로 바꾸는 거 어떨까?
```

백엔드는 R2로 구현했고, 팀원으로 데려온 [단은 선배](https://github.com/chungjung-d)가 만들어 주셨습니다.

## Show GN!

![slack copywriting](/images/is-an-ai/slack-copywriting.png)

서비스를 처음에 어디에 홍보할까는 명확했죠. 먼저 동아리 Infoteam에 올려서 QA를 한 뒤 바로 [GeekNews](https://news.hada.io/topic?id=21139)에 올렸습니다.

GeekNews 홍보의 효과는 상당하더라구요. 홍보글은 화요일 오후 12시에 업로드했는데, 이런 전략이 있었습니다.

- 점심을 먹으며 GeekNews 최신글을 보는 개발자들에게 가장 먼저 노출된다.
- 빠르게 upvote를 모아 GeekNews 첫화면에 노출된다.
- 다음날 오전 GeekNews 슬랙봇을 통해 다시 한 번 노출된다.

전략은 상당히 유효했습니다. 첫날 업로드 3시간 뒤 GeekNews 메인 첫번째 글로 노출되었고 다음 날 슬랙봇을 통해 수많은 슬랙 채널에 전달되었어요.

<img src="/images/is-an-ai/geeknews.png" style="width: 50%">

트래픽은 독특하게도 긱뉴스에 메인에 노출된 월요일 낮 시간대와, 슬랙봇으로 전송된 화요일 오전 시간대가 높게 솟아오른 형태였어요.
둘 다 Cloudflare 기준 Unique Visitor가 800명대로 비슷했습니다.

![cloudflare traffic](/images/is-an-ai/cloudflare-traffic.png)
