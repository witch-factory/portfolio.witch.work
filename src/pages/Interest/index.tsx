import { pageGraphData } from '@/assets/intro';
import Constellation from '@/components/Constellation';
import Layout from '@/ui/Layout';

function Interest() {
  return (
    <Layout>
      <Constellation width={800} height={600} data={pageGraphData} />
    </Layout>
  );
}

export default Interest;
