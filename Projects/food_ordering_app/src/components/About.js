import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">About US</h1>
            <UserClass name="Default Name" location="India" />
        </div>
    );
};

export default About;