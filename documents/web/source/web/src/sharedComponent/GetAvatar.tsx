import { Avatar } from "flowbite-react";

function GetAvatar() {
    return (
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      </div>
    );
}

export default GetAvatar