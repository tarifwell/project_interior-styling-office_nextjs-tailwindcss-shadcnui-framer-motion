import React from 'react';
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';

const Mobilenavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav 
              containerStyles={'flex flex-col items-center gap-y-6'}
              linkStyles={'text-lxl font-semibold'} //text-foreground

            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
};

export default Mobilenavigation;