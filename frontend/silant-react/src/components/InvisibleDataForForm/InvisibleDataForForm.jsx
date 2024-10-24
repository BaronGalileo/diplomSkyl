import React from "react";
import { useFormContext } from "react-hook-form";

export const InvisibleDataForForm = () => {
    const {
        register
    } = useFormContext()




    return(
        <>
        <input {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.type`)} type="hidden" value="company" />
        <input {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.sparkId`)} type="hidden" value='' />
        <input {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.entityId`)} type="hidden" value=''/>
        <input {...register(`histogramTypes.0`)} type="hidden"  value="totalDocuments"/>
        <input {...register(`histogramTypes.1`)} type="hidden" value="riskFactors"/>
        <input {...register(`sortDirectionType`)} type="hidden" value="desc"/>
        <input {...register(`similarMode`)} type="hidden" value="none"/>
        <input {...register(`sortType`)} type="hidden" value="issueDate"/>
        <input {...register(`sortDirectionType`)} type="hidden" value="desc"/>
        <input {...register(`intervalType`)} type="hidden" value="month"/>
    </>
    )
}

