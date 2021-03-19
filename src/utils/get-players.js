export async function GetPlayers() {
    return await fetch(
        "https://thingproxy.freeboard.io/fetch/https://fantasy.premierleague.com/api/bootstrap-static/"
    );
}