'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from 'axios';

const schema = z.object({
  storeId: z.string().min(1,{
    message: "storeId starts from 1",
  }),
  customers_in: z.string().min(1).max(2),
  customers_out: z.string().min(1).max(2),
});

const ProducerForm = () => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        // defaultValues: {
        //   storeId: 1,
        // },
      })
      const onSubmit=(values: z.infer<typeof schema>)=>{
        // console.log(values);
        axios.post('/api/produce',values).then(console.log);
      }
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="storeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Id</FormLabel>
                  <FormControl>
                    <Input placeholder="Store Id"{...field} />
                  </FormControl>
                  <FormDescription>
                    This is Store Id.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customers_in"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Arriving Customers</FormLabel>
                  <FormControl>
                    <Input placeholder="Arrivals" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is number of customers arriving.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="customers_out"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departing Customers</FormLabel>
                  <FormControl>
                    <Input placeholder="Departures" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is number of customers departing.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='hover:bg-slate-100 hover:text-black'>Submit</Button>
          </form>
        </Form>
      )
}

export default ProducerForm