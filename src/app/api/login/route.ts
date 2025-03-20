import { NextRequest, NextResponse } from 'next/server';

/**
 * 用户登录操作
 * 注：用来测试
 */
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const { email, password } = body;

    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'rick.xukai@gmail.com' && password === 'admin123') {
          resolve(
            NextResponse.json({
              data: {
                token: '1234567890',
              },
              message: 'SUCCESS',
              status: 200,
            })
          );
        } else {
          resolve(
            NextResponse.json({
              message: '账户或者密码错误',
              status: 401,
            })
          );
        }
      }, 1000);
    });
  } catch (err) {
    return NextResponse.json({ message: 'ERROR' }, { status: 500 });
  }
};
