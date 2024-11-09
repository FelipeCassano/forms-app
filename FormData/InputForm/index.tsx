import React, { Text, TextInput, View } from 'react-native';
import { styled } from 'nativewind';

function InputStyled({ field, placeholder, texto, form, ...rest }) {
  return (
    <View
      {...rest}
      className={`h-auto w-[87%] self-center ${texto === undefined ? 'gap-0' : ''}`}
    >
      <Text className={`${texto === undefined ? 'h-0' : 'h-auto'}`}>
        {texto}
      </Text>
      <TextInput
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        value={form.values[field.name]}
        placeholder={placeholder}
        {...rest}
        className='mt-2 h-14 rounded-[12px] bg-cinza/20 p-4 text-black'
      ></TextInput>
    </View>
  );
}

const InputForm = styled(InputStyled);
export default InputForm;

// Mascara:
// {mask ? (
//   <TextInputMask
//     type={mask.type}
//     options={mask.options}
//     onChangeText={form.handleChange(field.name)}
//     onBlur={form.handleBlur(field.name)}
//     value={form.values[field.name]}
//     placeholder={placeholder}
//     className="bg-cinza/20 h-14 mt-2 rounded-[12px] p-4 text-black"
//     {...rest}
//   />
// ) : (
//   <TextInput
//     onChangeText={form.handleChange(field.name)}
//     onBlur={form.handleBlur(field.name)}
//     value={form.values[field.name]}
//     placeholder={placeholder}
//     className="bg-cinza/20 h-14 mt-2 rounded-[12px] p-4 text-black"
//     {...rest}
//   />
// )}
