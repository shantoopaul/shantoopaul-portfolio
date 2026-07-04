'use client';

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
    <div className="pb-16" id="contact">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl mb-6 sm:max-w-[26ch] w-full">
          Let&apos;s Build Something Together
        </h2>
        <p className="max-w-[58ch] w-full text-sub">
          Feel free to reach out if you&apos;re looking for a developer,
          have a question, or just want to connect.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-8/12">
        <div className="mb-4">
          <h3 className="mb-2 text-tertiary">My Location</h3>
          <address className="not-italic">Dhaka, Bangladesh</address>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-tertiary">Contact Number</h3>
          <a href="tel:+8801533302991">+880-153-330-2991</a>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-tertiary">Email</h3>
          <a href="mailto:shantoopaul@gmail.com">shantoopaul@gmail.com</a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
