Built for Cloudflare Pages:

```shellscript
npx create-remix@latest --template https://github.com/jacob-ebey/remix-shadcn/tree/cloudflare
```

## Built in theme switcher

![image](https://github.com/jacob-ebey/remix-shadcn/assets/12063586/c6ed812c-764f-46b7-af30-26284f55535c)

![image](https://github.com/jacob-ebey/remix-shadcn/assets/12063586/4e378230-3b4b-4b78-8af4-096b30aacf79)

## Development

Run the Vite dev server:

```sh
npm run dev
```

## Deployment

In the Cloudflare Dashboard:

- Create a new Cloudflare Pages application
- Set the `Build command` to `npm run build`
- Set the `Build output directory` to `/build/client`

## This should not use anything other than npm
