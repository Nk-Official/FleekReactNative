import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Ou4m7uRjWhiViLVWsaYkCMi3B_aA6HbibGU-LMLlgYoMG7TEKMkcZdTtNOewLbNRu2RbshJLpkeCFPFMdmO9Sd47dVxmyu1p6d3RM8VTPQm7F3Uk96E16n6IAKjhX3Yx',
  },
});
