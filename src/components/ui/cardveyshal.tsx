import * as React from "react"

import { cn } from "@/lib/utils"

const Cardveyshal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-200 bg-white text-gray-950 shadow dark:border-gray-800 dark:bg-[#3221a1] dark:text-gray-50",
      className
    )}
    {...props}
  />
))
Cardveyshal.displayName = "Card"

const CardveyshalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardveyshalHeader.displayName = "CardHeader"

const CardveyshalTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardveyshalTitle.displayName = "CardTitle"

const CardveyshalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
))
CardveyshalDescription.displayName = "CardDescription"

const CardveyshalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardveyshalContent.displayName = "CardContent"

const CardveyshalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardveyshalFooter.displayName = "CardFooter"

export { Cardveyshal, CardveyshalHeader, CardveyshalFooter, CardveyshalTitle, CardveyshalDescription, CardveyshalContent }
