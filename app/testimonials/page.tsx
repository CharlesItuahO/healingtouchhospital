import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I visited this hospital sometimes last year and all I can say is that their services, their comportment, the environment, literally everything is top-notch. If you are looking for a safe place to get treatment, deliver your baby in a safe and conducive environment then you need to go to this hospital. I rate them 10/10.",
      author: "Satisfied Patient",
    },
    {
      text: "The urgent response and treatment from the medical practitioners at Healing Touch Hospital is probably the only reason I'm still alive to make such a review (along with the mercy of God). A top notch medical facility with the best medical practitioners. A big thank you to Doctor Jane and the staff at Healing Touch Hospital.",
      author: "Grateful Patient",
    },
    {
      text: "My wife and I delivered our first baby here. From the warm reception on the first day, till the care on the very last day was amazing. I thank God I discovered Healing Touch and will highly recommend.",
      author: "Happy Father",
    },
    {
      text: "I love this hospital. Their services is top notch... The workers are just too good, caring and loving especially Dr Agu and the nurses, cook and also the cleaner... God bless you all and grant you your hearts desires... I promise to refer more people to your hospital.",
      author: "Appreciative Patient",
    },
    {
      text: "The hospital is very good. I love their services. I love the way I was treated and as a result, I will change my children's HMO to Healing Touch Hospital. Keep up your good work.",
      author: "Loyal Patient",
    },
    {
      text: "I had road traffic accident last week and was rushed to healing touch hospital. The scan showed that my ribs were fractured. They took care of me and I am being discharge this morning. The doctors and nurses and very good especially Dr. Jane. The neatness and the environment is top notch. The treatment and care are very very good. Thanks to God and healing touch hospital I am back to my Feet.",
      author: "Recovering Patient",
    },
    {
      text: "This is the best hospital in the main land, their care is top-notch. I just delivered a beautiful baby girl. I and my baby were taken care of with foreign standard. The food is of good standard and the room is very cozy. I am happy I came to Healing Touch Hospital.",
      author: "New Mother",
    },
    {
      text: "I had the best experience at Healing Touch Hospital. After my first baby at Healing Touch Hospital, I had to come again for my second baby. The doctors and all the staffs gave me the best care and I will always recommend the hospital to everyone because it feels like a home away from home. Healing Touch Hospital or nothing.",
      author: "Returning Mother",
    }
  ];

  return (
    <div className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Testimonials</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don&apos;t just take our word for it. Read what our patients have to say about their experiences at Healing Touch Hospital.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          <p className="mt-2 font-medium text-slate-700">4.9/5 Average Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100" />
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
