import Heading from "../molecules/Heading";
interface Props {
  title: React.ReactNode;
  text?: string;
  content?: React.ReactNode;
  isCenter?: boolean;
  classNameTitle?: string;
}
const BoxsSection = ({ title, text, content, classNameTitle, isCenter }: Props) => {
  return (
    <>
      <section className="ds-container mb-96">
        <Heading title={title} text={text} classNameTitle={classNameTitle} isCenter={isCenter} />
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">{content}</div>
      </section>
    </>
  );
};
export default BoxsSection;
