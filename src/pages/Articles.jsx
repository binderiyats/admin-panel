import PostList from '../components/Blogs/PostList';
import Heading from '../components/Heading';

export default function Articles({ handleShow }) {
  return (
    <div className="container-sm body-container">
      <Heading title="Blog posts" handleShow={handleShow} />
      <PostList />
    </div>
  );
}
