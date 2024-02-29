import { Button, Label, TextInput } from "flowbite-react";

function ContactForm() {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Full Name" />
                </div>
                <TextInput
                    id="name"
                    type="name"
                    placeholder="Enter your name here"
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email Address" />
                </div>
                <TextInput
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Message" />
                </div>
                <TextInput id="message" type="password" required />
            </div>

            <Button className="bg-blue-700" type="submit">
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;
