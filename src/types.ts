export interface phoneProps {
  "id": number,
  "name": string,
  "manufacturer": string,
  "description": string,
  "color": string,
  "price": number,
  "imageFileName": string,
  "screen": string,
  "processor": string,
  "ram": number
}

export interface appState {
  pending: boolean,
  phones: phoneProps[],
  error: string | undefined
}

export interface getPhoneAction {
  type: 'FETCH_PHONES_ERROR' | 'FETCH_PHONES_SUCCESS' | 'FETCH_PHONES_PENDING',
  payload: appState,
}