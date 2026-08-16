'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function EstimateForm() {
  const [service, setService] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Free Estimate Request — Forest W Floors')
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nPhone: ${form.get('phone')}\nLocation: ${form.get('location')}\nService: ${service}\n\nProject details:\n${form.get('details') || 'Not provided'}`,
    )
    setSent(true)
    window.location.href = `mailto:forestwfloor@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" name="name" autoComplete="name" placeholder="John Smith" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone number</FieldLabel>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" required />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="location">Project location</FieldLabel>
          <Input id="location" name="location" autoComplete="street-address" placeholder="City or ZIP code" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="service">Service needed</FieldLabel>
          <Select value={service} onValueChange={(value) => setService(value ?? '')} required>
            <SelectTrigger id="service" className="h-11 w-full" aria-label="Service needed">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Hardwood installation">Hardwood installation</SelectItem>
                <SelectItem value="Floor refinishing">Floor refinishing</SelectItem>
                <SelectItem value="Vinyl installation">Vinyl installation</SelectItem>
                <SelectItem value="Laminate installation">Laminate installation</SelectItem>
                <SelectItem value="Commercial flooring">Commercial flooring</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="details">Tell us about your project <span className="text-muted-foreground">(optional)</span></FieldLabel>
          <Textarea id="details" name="details" rows={4} placeholder="Approximate square footage, current flooring, timeline..." />
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" className="h-12 w-full text-base">
        Get my free estimate
        <ArrowRight data-icon="inline-end" />
      </Button>
      {sent ? (
        <p className="flex items-center gap-2 text-sm text-primary" role="status">
          <CheckCircle2 className="size-4" aria-hidden="true" /> Your email app is ready with your request.
        </p>
      ) : (
        <p className="text-center text-sm text-muted-foreground">No obligation. We&apos;ll get back to you as soon as possible.</p>
      )}
    </form>
  )
}
