const config = {
  bucket: {
    slug: process.env.slug,
    read_key: process.env.read_key,
    write_key: process.env.write_key
  },
  object_type: "menus",
  token: process.env.token
};

export default config;
