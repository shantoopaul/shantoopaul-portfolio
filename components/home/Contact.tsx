'use client';

import FormInput from "@/components/ui/form-input";
import FormTextarea from "@/components/ui/form-textarea";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Contact() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as any);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <div className="pb-16 scroll-mt-20" id="contact">
      <hgroup className="mb-10">
        <h2 className="text-secondary text-sm font-bold">
          <span className="text-primary">05 </span>
          CONTACT ME
        </h2>
        <p className="heading-size">
          Let's <span className="text-primary italic">build </span> something together
        </p>
        <p className="max-w-[58ch] w-full text-sub">
          Feel free to reach out if you&apos;re looking for a developer,
          have a question, or just want to connect.
        </p>
      </hgroup>
      <div className="flex flex-col md:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-5 max-w-2xl bg-card-background rounded-xl p-6 sm:p-8"
        >
          <FormInput
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Shanto Paul"
            required
          />
          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="shantoopaul@gmail.com"
            required
          />
          <FormTextarea
            label="Message"
            id="message"
            name="message"
            rows={5}
            placeholder="I like your portfolio..."
            required
          />
          <div>
            <InteractiveHoverButton type="submit" className="w-full flex justify-center">
              Submit Form
            </InteractiveHoverButton>
          </div>
        </form>
        <div className="flex flex-col gap-10">
          <div className="mb-4">
            <a href="https://www.google.com/maps/place/Dhaka, Bangladesh">
              <h3 className="mb-2 text-tertiary">My Location</h3>
              <address className="not-italic">Dhaka, Bangladesh</address>
            </a>
          </div>
          <div className="mb-4">
            <a href="tel:+8801533302991">
              <h3 className="mb-2 text-tertiary">Contact Number</h3>
              <p>+880-153-330-2991</p>
            </a>
          </div>
          <div className="mb-4">
            <a href="mailto:shantoopaul@gmail.com">
              <h3 className="mb-2 text-tertiary">Email</h3>
              <p>shantoopaul@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}