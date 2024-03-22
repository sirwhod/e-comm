import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselHome() {
  return (
    <Carousel className="w-full space-y-6">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              className="w-full rounded-md"
              src="https://images.tcdn.com.br/img/img_prod/1065014/1636743565_banner-home-frete-gratis-01.jpg"
              alt=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
