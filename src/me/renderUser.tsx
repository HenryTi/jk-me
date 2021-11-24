import { User, Web } from "tonva-core";
import { UserView } from "tonva-view";

export const renderUserText = (web:Web, user:any):JSX.Element => {
    let renderUser = (user:User) => {
        let {name, nick} = user;
        return <>{nick || name}</>;
    }
    return <UserView web={web} user={user} render={renderUser} />
}
