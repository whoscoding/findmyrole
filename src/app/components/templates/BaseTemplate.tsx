export interface IBaseTemplate {
    sampleTextProp: string;
  }
  
  const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
    return <div className="bg-gradient-to-r from-cyan-500 to-green-500 font-semibold" >{sampleTextProp}</div>;
  };
  
  export default BaseTemplate;