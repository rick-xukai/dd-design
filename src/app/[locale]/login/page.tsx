'use client';
import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import useUserStore from '@/store/user.store';
import { useCookie } from '@/hooks/use-cookie';
import { CookieKeys } from '@/constants/keys';
import { LoginContainer } from '@/styles/login.style';

const LoginPage = () => {
  const t = useTranslations();
  const { toast } = useToast();
  const cookie = useCookie([CookieKeys.userInfo]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userLoginAction, error } = useUserStore();

  const formSchema = z.object({
    email: z.string().email({ message: t('invalidEmail') }),
    password: z.string().min(6, { message: t('invalidPassword') }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await userLoginAction(values);
    if (response !== undefined && response !== null) {
      cookie.setCookie(CookieKeys.userInfo, JSON.stringify(response), {
        path: '/',
      });
      router.push(searchParams.get('returnUrl') || '/');
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: t('loginFailed'),
        description: error,
      });
    }
  }, [error]);

  return (
    <LoginContainer className="fixed w-screen h-screen top-0 left-0 flex">
      <div className="m-auto rounded-2xl p-[16px]">
        <div className="formContent w-[680px] pt-[80px] pb-[80px] pl-[100px] pr-[100px]">
          <div className="text-2xl font-bold text-center">
            {t('lginAccount')}
          </div>
          <div className="mt-[24px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input
                          className="h-[45px]"
                          placeholder={t('inputEmail')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-[24px]">
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <Input
                          className="h-[45px]"
                          type="password"
                          placeholder={t('inputPassword')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-[60px] w-full h-[45px]" type="submit">
                  {t('login')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Toaster />
    </LoginContainer>
  );
};

export default LoginPage;
