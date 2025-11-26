export default function Contact() {
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
    </div>
  );
}
