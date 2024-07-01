'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { ZipCode, Address } from './types';


export default function Home() {
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const [zipcode, setZipcode] = useState<string>('7830060');
  const [error, setError] = useState<string>('');

  const handleOnClick = () => {
    axios.get<ZipCode>(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((res: any) => {
        const data = res.data;
        if (data.results.length > 0) {
          setAddress(data.results[0]);
        }
      })
      .catch((_err: any) => {
        setAddress(undefined);
        setError(`住所の取得に失敗しました：${zipcode}`);
      });
  };

  return (
    <>
      <h1>It works!</h1>
      <Input
        value={zipcode}
        onValueChange={setZipcode}
      />
      <Button color="primary" onClick={handleOnClick}>ボタンだよ</Button>
      { address &&
        <p>{address.address1}, {address.address2}, {address.address3}</p>
      }
      { error &&
        <p>{error}</p>
      }
    </>
  );
}
