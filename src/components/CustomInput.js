const CustomInput = ({field, form: {touched, errors}, ...props}) => (
   <div className="form-group">
     <label>{props.label}</label>
     <input type="text" className="form-control" {...field} />
   </div>
 )

export default CustomInput
