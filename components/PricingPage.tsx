import React from 'react'
import { Card,CardHeader,CardAction,CardDescription,CardContent,CardFooter,CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
// import { pricingPlan} from '@/lib/pricingPlan'
function PricingPage() {
  return (
    <div className='grid grid-cols-3 gap-20'>
     {
        [1,2,3].map((item:number,index:number)=>(
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                      Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                      <Button variant="link">Sign Up</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                              href="#"
                              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                              Forgot your password?
                            </a>
                          </div>
                          <Input id="password" type="password" required />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                    <Button variant="outline" className="w-full">
                      Login with Google
                    </Button>
                  </CardFooter>
                </Card>
              
        ))
     }
    </div>
  )
}

export default PricingPage