import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';

interface FormDataProps {
  onSubmit: (data: any) => void;
  initialValues?: object;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  schema?: any;
}

function FormDataRoot({
  className,
  children,
  onSubmit,
  initialValues = {},
  schema,
}: FormDataProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <View id='select' className='flex h-full w-full'>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(data: any) => {
          console.log(data);
          onSubmit(data);
        }}
        validationSchema={schema}
      >
        {({
          isSubmitting,
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <React.Fragment>
            {children &&
              childrenArray.map((child: any, index: any) =>
                React.cloneElement(child as React.ReactElement<any>, {
                  key: index,
                  errors,
                  touched,
                  handleSubmit,
                })
              )}
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
}

export default FormDataRoot;
