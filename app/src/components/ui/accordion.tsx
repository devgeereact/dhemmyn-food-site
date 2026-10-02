// shadcn/ui Accordion (MIT, https://ui.shadcn.com/docs/components/accordion), built on Radix UI.
// Restyled to DESIGN-SYSTEM.md: a ruled list, questions 48 px high with a "+" and "-" in text,
// no icon set, open and close instant (no height animation), and the site's own focus ring.
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
      className={cn("flex w-full flex-col", className)}
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
      className={cn("border-b border-border", className)}
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
          "group/accordion-trigger flex min-h-12 flex-1 cursor-pointer items-center justify-between gap-4 py-3 text-left font-semibold",
          className
        )}
        {...props}
      >
        {/* On hover the question gets a 3 px underline, the "+" and "-" do not. */}
        <span className="underline-offset-[0.22em] group-hover/accordion-trigger:underline group-hover/accordion-trigger:decoration-3">
          {children}
        </span>
        <span aria-hidden="true" className="group-aria-expanded/accordion-trigger:hidden">
          +
        </span>
        <span aria-hidden="true" className="hidden group-aria-expanded/accordion-trigger:inline">
          -
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
      <div className={cn("max-w-[68ch] pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
