import { CalendarDays, MapPinned, Navigation } from 'lucide-react'

import { eventConfig } from '../../config/event.config'
import { Button } from '../../components/common/Button'

type VenueEvent = {
  label: string
  dateLabel: string
  timeLabel: string
  venue: {
    name: string
    address: string
    googleMapsUrl: string
  }
}

export function LocationCard({ event }: { event: VenueEvent }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-[#fdfaf6] shadow-[0_24px_60px_-32px_rgba(64,46,28,0.45)]">
      <div className="h-48 w-full bg-[radial-gradient(circle_at_top,_rgba(191,149,96,0.45),_transparent_50%),linear-gradient(135deg,_#2d3b32_0%,_#b99b75_32%,_#f3e7d5_100%)]" />
      <div className="space-y-6 p-6 sm:p-8">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#b8924b]">{event.label}</p>
          <h3 className="mt-3 font-display text-3xl text-[#2a231d]">{event.venue.name}</h3>
        </div>

        <div className="space-y-4 text-[#584d48]">
          <div className="flex items-start gap-3">
            <MapPinned className="mt-1 h-5 w-5 text-[#b8924b]" />
            <p>{event.venue.address}</p>
          </div>
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-1 h-5 w-5 text-[#b8924b]" />
            <p>
              {event.dateLabel} at {event.timeLabel}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={event.venue.googleMapsUrl} variant="primary" className="!w-full !justify-center sm:!w-auto">
            <span className="flex items-center gap-2">
              <Navigation size={16} />
              Get Directions
            </span>
          </Button>
          <Button href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventConfig.couple.names + ' ' + event.label)}&details=${encodeURIComponent('Join us for the ' + event.label.toLowerCase() + ' celebration of Preetha and Vijayaprathap.')}&location=${encodeURIComponent(event.venue.address)}&dates=${encodeURIComponent(event.label === 'Marriage' ? '20270210T090000Z/20270210T120000Z' : '20270212T180000Z/20270212T220000Z')}`} variant="secondary" className="!w-full !justify-center sm:!w-auto">
            Add to Calendar
          </Button>
        </div>
      </div>
    </div>
  )
}
