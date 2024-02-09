'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic'

const P5comp = dynamic(() => import('@/app/P5comp.jsx'), {
  ssr: false,
})
export default function AdminLiz(){

  return(
    <div> TEST TEST
              <P5comp />
    </div>

  )
}