import { NextRequest, NextResponse } from 'next/server';
import _ from 'lodash';

import HomePageWaterfullTestData from '@/constants/homePageWaterfullTestData.json';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const { pageNumber, pageSize } = body;

    const startIndex = (pageNumber - 1) * pageSize;

    const recommendedList = _.slice(
      HomePageWaterfullTestData,
      startIndex,
      pageSize * pageNumber
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          NextResponse.json(
            {
              data: {
                recommendedList,
                carouselList: [
                  {
                    id: 1,
                    imageUrl:
                      'https://bate.diandiansheji.com//web/nextclient/_next/static/media/testImages8.01e22613.png',
                  },
                  {
                    id: 2,
                    imageUrl:
                      'https://bate.diandiansheji.com/web/nextclient/_next/static/media/testImages9.2b07a0af.jpg',
                  },
                  {
                    id: 3,
                    imageUrl:
                      'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee-upload/bee_prod/biz_1521/tos_e335adc94d4701193ad5186af1bb9ca3.jpg',
                  },
                  {
                    id: 4,
                    imageUrl:
                      'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee-upload/bee_prod/biz_1521/tos_e335adc94d4701193ad5186af1bb9ca3.jpg',
                  },
                ],
                total: 105,
              },
              message: '操作成功！',
            },
            { status: 200 }
          )
        );
      }, 1000);
    });
  } catch (err) {
    return NextResponse.json({ message: 'ERROR' }, { status: 500 });
  }
};
