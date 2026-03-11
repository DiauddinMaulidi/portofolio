import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import experiences from "../assets/experiences"

export function CardImage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
            <Card className="overflow-hidden pt-0 hover:scale-[1.02] transition duration-300">
                <div key={index} className="relative">
                    <div className="absolute inset-0 z-30 aspect-video" />
                    <img
                        src={experience.w_img}
                        alt="KKN"
                        className="z-20 aspect-video w-full object-cover"
                    />
                    <CardHeader className="py-3">
                        <CardAction>
                            <Badge variant="secondary">2025</Badge>
                        </CardAction>
                        <CardTitle>{experience.w_name}</CardTitle>
                        <CardDescription>
                            {experience.w_des}
                        </CardDescription>
                    </CardHeader>
                    {/* <CardFooter>
                        <Button className="w-full cursor-pointer">View Event</Button>
                    </CardFooter> */}
                </div>
            </Card>
        ))}
    </div>
  )
}
