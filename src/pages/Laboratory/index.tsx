import { pageGraphData } from '@/data/interest';
import Constellation from '@/components/Constellation';
import Layout from '@/ui/Layout';

function Interest() {
  return (
    <Layout>
      <Constellation data={pageGraphData} />
    </Layout>
  );
}

export default Interest;
