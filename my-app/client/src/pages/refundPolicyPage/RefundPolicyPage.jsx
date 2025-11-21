import policyData from './data';
import PageHeader from '../pageHeader/PageHeader';
import InfoPage from '../infoPage/InfoPage';

const RefundPolicyPage = () => {
  return (
    <section>
      <PageHeader
        label="Refund Policy"
        subtitle="Easy refunds and returns for your satisfaction."
      />
      {policyData.map((item, index) => (
        <InfoPage
          key={index}
          title={item.title}
          style={{ whiteSpace: 'pre-line' }}
        >
          {item.content}
        </InfoPage>
      ))}
    </section>
  );
};
export default RefundPolicyPage;
