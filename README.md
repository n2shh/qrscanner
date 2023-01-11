![QRApp](https://raw.githubusercontent.com/n2shh/qrscanner/master/images/mockup.png)

# QR Scanner 📱

#### A mobile QR Scanner, with webapp that perform an action when its scanned

- **Mobile:** Android Application built with Expo
- **Website:** Built with React and TailwindCSS (Using sockets)
- **API:** Built with express and socket.io

## Useful for

- Developers with basic knowledge on React searching basic projects to learn
- Developers learning Socket.io, React or Expo

## Run project

- Clone repo `git clone https://github.com/n2shh/qrscanner.git`
- Switch to code directoy `cd code`
- Configure:
  - `/qr-mobile/config/config.json` for the socket server (in windows use `ipconfig` and use your ipv4 here)
  - `/api/.env` for PORT
  - `/web/.env` for PORT
- Install packages:
  - **Mobile:** Install packages with `npx expo install`
  - **Web:** Install packages with `npm i`
  - **API:** Install packages with `npm i`
- Development Servers
  - **Mobile:** Run mobile development server with expo using `npx expo start`
  - **Web:** Run react development server with `npm run start`
  - **API:** Run server development server with `npm run dev` (install nodemon using `npm install -g nodemon`)
- Production Servers
  - **Web:** Crear react production files `npm run build`
  - **API:** Run server production server with `npm run prod`

## Author

Nicolas Sosa - [GitHub](https://github.com/n2shh) · [Twitter](https://twitter.com/n2shk)

## Hire me

Looking for a developer to build your next idea? Get in touch in Discord `nish#0690` or [n2shkd@gmail.com](mailto:n2shkd@gmail.com)
