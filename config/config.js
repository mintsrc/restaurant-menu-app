const config = {
  bucket: {
    slug: process.env.COSMICJS_BUCKET_SLUG,
    read_key: process.env.COSMICJS_READ_KEY,
    write_key: process.env.COSMICJS_WRITE_KEY
  },
  object_type: "menus"
};

export default config;
