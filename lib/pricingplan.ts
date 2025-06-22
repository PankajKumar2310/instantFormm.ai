type PricingPlan={
    level:string,
    price:string,
    services:string[]
}


export const pricingPlan : PricingPlan[] = [
    {
      level: "Free",
      price: "$0/month",
      services: [
        "🎁 3 Free Credits",
        "🛠️ Basic Supports",
        "⚙️ Limited Features",
        "🌐 Community Access"
      ]
    },
    {
      level: "Pro",
      price: "$29/month",
      services: [
        "💳 Unlimited Credits",
        "🛠️ Basic Supports",
        "⚙️ Limited Features",
        "🌐 Community Access"
      ]
    },
    {
      level: "Enterprise",
      price: "$79/month",
      services: [
        "💳 Unlimited Credits",
        "🛠️ Basic Supports",
        "⚙️ Limited Features",
        "🌐 Community Access"
      ]
    }
  ];
  