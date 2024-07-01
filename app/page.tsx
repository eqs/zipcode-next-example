'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';

export interface ZipCode {
  message?: string;
  results: Address[];
  status:  number;
}

export interface Address {
  address1: string;
  address2: string;
  address3: string;
  kana1:    string;
  kana2:    string;
  kana3:    string;
  prefcode: string;
  zipcode:  string;
}

export default function Home() {
  const [address, setAddress] = useState<Address | undefined>(undefined);

  useEffect(() => {
    axios.get<ZipCode>('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
      .then((res: any) => {
        const data = res.data;
        if (data.results.length > 0) {
          setAddress(data.results[0]);
        }
      });
  }, []);

  return (
    <>
      <h1>It works!</h1>
      <Button color="primary">ボタンだよ</Button>
      { address &&
        <p>{address.address1}, {address.address2}, {address.address3}</p>
      }
    </>
  );
}
