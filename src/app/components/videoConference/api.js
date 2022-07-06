export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlNjc5ODExMS03ZGMxLTRhYzMtYjM1Mi03OThkZjZjOTczMjUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1NTY2NTE3OCwiZXhwIjoxNjU2MjY5OTc4fQ.u2YG9bapOEUQHGkkZRY8cDcZI1I-xqQI7PJD7RDgnd8";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};