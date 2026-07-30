'use client';

import { Controller, useForm } from 'react-hook-form';
import { projectSchema } from '../schemas/project.scehma';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/shared/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/shared/components/ui/input-group';
import { Project } from '@/shared/types/projectModel';
import { useEffect } from 'react';
import { DialogClose } from '@/shared/components/ui/dialog';

interface IProps {
  mode: string;
  project?: Project;
  handleSubmit: (data: z.infer<typeof projectSchema>) => void;
}

export default function ProjectForm({ mode, project, handleSubmit }: IProps) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: '',
      description: '',
      color: '',
    },
  });

  useEffect(() => {
    if (mode === 'edit' && project) {
      form.setValues(project);
    }
  }, []);

  const title = mode === 'create' ? 'Create Project' : 'Edit Project';

  const buttonLabel = mode === 'create' ? 'Submit' : 'Save changes';

  function onSubmit(data: z.infer<typeof projectSchema>) {
    handleSubmit(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>These are the project details</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Project name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    What is your project, what problems does it solve
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
              <Button type="submit" form="form-rhf-demo">
                {buttonLabel}
              </Button>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
}
