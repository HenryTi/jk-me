import { User, Web } from "tonwa-core";
import { UserView } from "tonwa";

export const renderUserText = (web: Web, user: any): JSX.Element => {
    let renderUser = (user: User) => {
        let { name, nick } = user;
        return <>{nick || name}</>;
    }
    return <UserView web={web} user={user} render={renderUser} />
}
