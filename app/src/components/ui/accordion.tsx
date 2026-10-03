// shadcn/ui Accordion (MIT, https://ui.shadcn.com/docs/components/accordion), built on Radix UI.
// Restyled for redesign v2 (3 October 2026): each question is a soft paper row with an 8 px gap between
// rows, and a drawn plus that turns into a minus by rotating its upright stroke away (transform only).
// Open and close stay instant: animating the height would mean animating a layout property.
// Radix gives it real buttons inside headings, aria-expanded, and arrow, Home and End keys.
import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-md bg-paper", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex min-h-16 flex-1 cursor-pointer items-center justify-between gap-4 rounded-md px-6 py-4 text-left font-semibold",
          className
        )}
        {...props}
      >
        {/* On hover the question gets a 3 px underline, the "+" and "-" do not. */}
        <span className="underline-offset-[0.22em] group-hover/accordion-trigger:underline group-hover/accordion-trigger:decoration-3">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-icing text-cake-red"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-4">
            <path d="M3 8h10" />
            <path
              d="M8 3v10"
              className="origin-center [transform-box:fill-box] motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:scale-y-0"
            />
          </svg>
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" {...props}>
      <div className={cn("max-w-[68ch] px-6 pb-6", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
