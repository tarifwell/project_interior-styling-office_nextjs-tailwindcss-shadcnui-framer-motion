'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const page = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className='px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Contact Sales</h2> {/* text-gray-900 */}
          <p className='mt-2 text-lg leading-8 text-muted-foreground'>Please feel free to ask anything</p> {/* text-gray-600 */}
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> {/* sm:gap-x-10 */}
          
          <div className="mt-2.5">
            <Input type="name" id="firstname" placeholder="First Name" />
          </div>

          <div className="mt-2.5">
            <Input type="name" id="lastname" placeholder="Last Name" />
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="name" id="company" placeholder="Company" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="eamil" id="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex gap-x-4 items-center">
              {/* Le Switch */}
              <Switch
                id="switch-agreed"
                checked={agreed}
                onCheckedChange={setAgreed} // Remplace `onChange` par `onCheckedChange`
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200 flex h-6 w-10 rounded-full p-px transition-colors duration-200 ease-in-out flex-none cursor-pointer ring-1 ring-inset ring-gray-900/5  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              > 
                <span className="sr-only">Agree to policies</span>
                <span
                  className={`h-4 w-4 transform bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                    agreed ? "translate-x-5" : "translate-x-0"
                  } rounded-full`}
                />
              </Switch>

                 {/* Le texte associé */}
                <Label htmlFor="switch-agreed" className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-primary">
                    privacy&nbsp;policy
                  </a>
                  .
                </Label>
            </div>
          </div>

          <div className='mt-10'>
            <Button type="submit" 
              className="flex w-full items-center px-8 py-3 text-white rouned-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              Let's Talk <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default page;
