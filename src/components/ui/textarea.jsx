import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (
    // min-h-[80px] rounded-md px-3 text-sm
    // min-h-[175px] rounded-[30px] px-8 text-base
    // delete: border-input 
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-[30px] border bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
