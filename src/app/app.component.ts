import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TableProperties, ActionConfig, TableColumn } from './models/table.model';

@Component({
  selector: 'app-root',
  imports: [DynamicTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    tableProperties: TableProperties = {
      tableStyle: 'default',
      hovered: false,
      search: true
    };
    actions: ActionConfig[] = [
      { name: 'visibility', tooltip: 'View', function: 'functionName', source: 'material', color: '#7c3aed' },
      { name: 'edit', tooltip: 'Edit', function: 'functionName', source: 'material', color: '#2563eb' },
      { name: 'delete', tooltip: 'Delete', function: 'functionName', source: 'material', color: '#dc2626' },
    ]
    columns: TableColumn[] = [
      // {
      //   key: 'actions', header: 'Actions', type: 'custom', meta: {
      //     layout: 'horizontal',
      //     gap: 2,
      //     items: [
      //       {
      //         type: 'image',
      //         key: 'profilePic',
      //         size: 'sm',
      //         shape: 'circle'
      //       },
      //       {
      //         type: 'group',
      //         layout: 'vertical',
      //         items: [
      //           { type: 'text', key: 'name', class: 'font-semibold', style: { fontStyle: 'bold', align: 'Start', width: '20px' } },
      //           {
      //             type: 'group',
      //             layout: 'horizontal',
      //             gap: 2,
      //             items: [
      //               { type: 'text', key: 'age', class: 'font-semibold', style: { fontStyle: 'bold'} },
      //               { type: 'text', key: 'age', class: 'text-sm text-gray-500' },
      //             ]
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // },
      { key: 'profile', header: 'Profile', type: 'profile', shape: 'circle', style: { fontStyle: 'normal', align: 'end' } },
      { key: 'age', header: 'Age', type: 'text', sort: true, style: { fontStyle: 'normal', align: 'start', width: '100px' } },
      { key: 'dob', header: 'Date of Birth', type: 'date', sort: true },
      { key: 'amount', header: 'Amount', type: 'amount', sort: true },
      { key: 'website', header: 'Website', type: 'link' },
      { key: 'html', header: 'HTML', type: 'innerHtml' },
      { key: 'action', header: 'Actions', type: 'actions' },
      // { key: 'progress', header: 'Progress', type: 'progress', properties: { shape: 'Circle', background: 'blue' } },
      // { key: 'status', header: 'Status', type: 'badge', properties: { shape: 'Reactangle', background: 'Fill' } },
      // { key: 'details.address.city', header: 'Object', type: 'object' },
      // { key: 'balance', header: 'Balance', type: 'currency', sort: true },
      // { key: 'document', header: 'Document', type: 'document' },
      // { key: 'name', header: 'Name', type: 'text', sort: true },
      // { key: 'profilePic', header: 'Image', type: 'image', shape: 'circle' },
      // { key: 'actions', header: 'Actions', type: 'actions', properties: { shape: 'square', background: 'outline' } },
  
  
    ];
    users: any = [
      {
        name: 'Alice Johnson',
        age: 29,
        dob: '1996-03-15',
        balance: 15230.75,
        amount: 520.00,
        profilePic: 'https://i.pravatar.cc/150?img=1',
        profile: 'Alice Johnson',
        website: 'https://alice.dev',
        document: 'https://example.com/docs/alice_resume.pdf',
        html: '<strong>Premium User</strong>',
        status: 'Active',
        progress: 70,
        actions: null,
        // details: { name: 'abc', address: { city: 'tirunelveli' } }
      },
      {
        name: 'Bob Smith',
        age: 34,
        dob: '1990-07-09',
        balance: 2030.00,
        amount: 122.45,
        profilePic: 'https://i.pravatar.cc/150?img=2',
        profile: 'Bob Smith',
        website: 'https://bobsmith.com',
        document: 'https://example.com/docs/bob_profile.pdf',
        html: '<span class="text-success">Verified</span>',
        status: 'Pending',
        progress: 40,
        actions: null
      },
      {
        name: 'Charlie Ray',
        age: 27,
        dob: '1998-12-20',
        balance: 880.00,
        amount: 85.75,
        profilePic: 'https://i.pravatar.cc/150?img=3',
        profile: 'Charlie Ray',
        website: 'https://charlieray.net',
        document: 'https://example.com/docs/charlie_cv.pdf',
        html: '<i>Guest</i>',
        status: 'Inactive',
        progress: 20,
        actions: null
      },
      {
        name: 'Diana Prince',
        age: 31,
        dob: '1993-05-18',
        balance: 19875.00,
        amount: 1340.60,
        profilePic: 'https://i.pravatar.cc/150?img=4',
        profile: 'Diana Prince',
        website: 'https://dianaprince.com',
        document: 'https://example.com/docs/diana_bio.pdf',
        html: '<span class="badge bg-warning">Trial</span>',
        status: 'Active',
        progress: 90,
        actions: null
      },
      {
        name: 'Ethan Lee',
        age: 22,
        dob: '2002-01-10',
        balance: 560.10,
        amount: 44.99,
        profilePic: 'https://i.pravatar.cc/150?img=5',
        profile: 'Ethan Lee',
        website: 'https://ethanlee.dev',
        document: 'https://example.com/docs/ethan_info.pdf',
        html: '<span class="text-muted">Inactive</span>',
        status: 'Inactive',
        progress: 15,
        actions: null
      },
      {
        name: 'Fiona Gale',
        age: 45,
        dob: '1979-11-03',
        balance: 11500.99,
        amount: 930.10,
        profilePic: 'https://i.pravatar.cc/150?img=6',
        profile: 'Fiona Gale',
        website: 'https://fionagale.org',
        document: 'https://example.com/docs/fiona_cv.pdf',
        html: '<div style="color: red;">Suspended</div>',
        status: 'Pending',
        progress: 60,
        actions: null
      },
      {
        name: 'George King',
        age: 38,
        dob: '1987-08-21',
        balance: 30800.00,
        amount: 2500.00,
        profilePic: 'https://i.pravatar.cc/150?img=7',
        profile: 'George King',
        website: 'https://georgeking.io',
        document: 'https://example.com/docs/george_doc.pdf',
        html: '<b>Admin</b>',
        status: 'Active',
        progress: 100,
        actions: null
      },
      {
        name: 'Hannah Wells',
        age: 26,
        dob: '1999-02-02',
        balance: 7600.00,
        amount: 615.00,
        profilePic: 'https://i.pravatar.cc/150?img=8',
        profile: 'Hannah Wells',
        website: 'https://hannah.dev',
        document: 'https://example.com/docs/hannah_report.pdf',
        html: '<span style="color:green;">✓ Completed</span>',
        status: 'Active',
        progress: 75,
        actions: null
      },
      {
        name: 'Ian Rivers',
        age: 40,
        dob: '1985-09-30',
        balance: 3420.45,
        amount: 175.25,
        profilePic: 'https://i.pravatar.cc/150?img=9',
        profile: 'Ian Rivers',
        website: 'https://ianrivers.me',
        document: 'https://example.com/docs/ian_info.pdf',
        html: '<u>Viewer</u>',
        status: 'Inactive',
        progress: 50,
        actions: null
      },
      {
        name: 'Julia Banks',
        age: 33,
        dob: '1992-06-25',
        balance: 12670.00,
        amount: 1100.80,
        profilePic: 'https://i.pravatar.cc/150?img=10',
        profile: 'Julia Banks',
        website: 'https://juliabanks.com',
        document: 'https://example.com/docs/julia_cv.pdf',
        html: '<em>Pending Verification</em>',
        status: 'Pending',
        progress: 35,
        actions: null
      }
    ];
}
